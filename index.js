var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Node.js'); 
}).listen(8080);

// read Medium article, then https://www.w3schools.com/nodejs/nodejs_intro.asp then https://medium.com/technofunnel/node-js-single-threaded-event-based-architecture-9f73daee37a1 then: https://libuv.org/