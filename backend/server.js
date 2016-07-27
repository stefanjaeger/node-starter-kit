var express = require('express');
var app = express();

var ipaddress = "127.0.0.1";
var port = 9000;


//CORS middleware for localhost development
var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.get('/', function (req, res) {
  res.send(JSON.stringify({
      foo: 'bar'
  }));
});

app.listen(port, ipaddress, function () {
  console.log('listening on port ' + port);
});