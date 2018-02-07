const express = require("express");
const app = express();

app.listen("3000", () => {
  console.log("listening on port 3000");
});

// serve index.html from root dir
app.get("/", (req, res) => {
  res.sendFile(__dirname + "\\index.html");
});

// post
app.post("/quotes", (req, res) => {
  console.log("POST Request made");
});

console.log(`project directory: ${__dirname}`);
