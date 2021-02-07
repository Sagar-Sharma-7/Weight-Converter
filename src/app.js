// getting express
const express = require("express");
const app = express();
// getting path module
const path = require("path");
const port = 8000;

// path of index.html
const filePath = path.join(__dirname, "../public");

app.use(express.static(filePath));

// listening to port number 8000
app.listen(port, () => {
    console.log("Server is live now!!!"); // message
});