// var http = require('http');

// http.createServer(function (req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html'});
//   res.end('Hello World!');
// }).listen(8080);
// console.log('Hello World');

var http = require('http');
var tl = require("./todolist");
var url = require("url")

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('action en cours : ' + tl.mytodolist());
  console.log(req.url);
  res.write("A faire: " + tl.searchtask());
  res.write(req.url);
}).listen(8080);
// console.log('Hello World');