var express = require("express");
var app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/form", function (req, res) {
  var name = req.body.first + " " + req.body.last;
  res.send(name + "Done");
});

var server = app.listen(5000, function () {
  console.log("hi");
});