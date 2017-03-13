var express = require('express');
var app = express();
var port = 1337;

app.use(express.static('public'));

app.listen(port, function () {
  console.log('Listening to port', port);
});