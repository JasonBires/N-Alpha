// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('<strong><h1>Greetings Universe!</h1></strong><p>Suvrat Bhooshan pushing back onto heroku server going live!!!</p><p>How are you?</p>');
  res.send('<strong><h1>Day 2 of Coding - Suvrat</h1></strong>');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
