// web.js
var express = require("express");
var logfmt = require("logfmt");
var io = require("socket.io");
var delv = require("delivery");
var app = express();

console.log("hello world");

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
  res.send('<strong><h1>Greetings Universe!</h1></strong><p>Knock my Socks off</p>');
});

var port = Number(process.env.PORT || 5000);
app.listen(port, function() {
  console.log("Listening on " + port);
});
