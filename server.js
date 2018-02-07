var db;

const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

// db setup
MongoClient.connect(
  "mongodb://starWarior:devTest123@ds125588.mlab.com:25588/star-wars-quotes",
  (err, client) => {
    if (err) return console.log(err);
    db = client.db("star-wars-quotes");
    app.listen("3000", () => {
      console.log("listening on port 3000");
    });
  }
);

// serve index.html from root dir
app.get("/", (req, res) => {
  res.sendFile(__dirname + "\\index.html");
});

// post
app.post("/quotes", (req, res) => {
  console.log(req.body);
});

console.log(`project directory: ${__dirname}`);
