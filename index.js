const express = require("express");
const app = express();

app.use(express.static('public'));
app.use(express.json());

const port = process.env.PORT || 4001;

app.listen(port, () => {
 console.log(`Web server is listening on port ${port}!`);
});
