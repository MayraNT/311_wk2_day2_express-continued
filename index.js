const express = require("express");
const contacts = require("./routes/contacts")
const vehicles = require("./routes/vehicles")
const comments = require("./routes/comments")
const products = require("./routes/products")

const app = express();
const port = process.env.PORT || 4001;

app.use(express.static('public'));
app.use(express.json());

app.use(contacts);
app.use(vehicles);
app.use(comments);
app.use(products);

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
