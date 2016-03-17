var fs = require('fs') ;
var http = require('http');
var requestListener = function (req, res) {
  res.writeHead(200);

fs.readFile("bitstarter.html", 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  res.end(data);
});

}

var server = http.createServer(requestListener);
server.listen(process.env.PORT || 8080);


