var fs = require('fs') ;
var http = require('http');
var requestListener = function (req, res) {
  res.writeHead(200);
var data = fs.readFileSync("bitstarter.html");
  res.end(data);
}

var server = http.createServer(requestListener);
server.listen(process.env.PORT || 8080);
