const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.listen("3000", () => {
  console.log("listening on port 3000");
});

// serve index.html from root dir
app.get("/", (req, res) => {
  res.sendFile(__dirname + "\\index.html");
});

// post
app.post("/quotes", (req, res) => {
  console.log(req.body);
});

console.log(`project directory: ${__dirname}`);
