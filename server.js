var db;

const express = require("express");
const bodyParser = require("body-parser");
const MongoClient = require("mongodb").MongoClient;
const app = express();

// set view engine
app.set("view engine", "ejs");

// enable body parser
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
  let cursor = db
    .collection("quotes")
    .find()
    .toArray((err, results) => {
      if (err) return console.log(err);
      console.log(results);
    });
  res.sendFile(__dirname + "\\index.html");
});

// post
app.post("/quotes", (req, res) => {
  db.collection("quotes").save(req.body, (err, result) => {
    if (err) return console.log(err);
    console.log("saved to database");
    // redirect to home after successful submission
    res.redirect("/");
  });
});

console.log(`project directory: ${__dirname}`);
