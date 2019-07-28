// var http = require("http");
// http.createServer(function(request,repose) {
//   repose.writeHead(200, {"Content-Type": "text/plain"});
//   repose.write("hello world")
//   repose.end();
// }).listen(8888)

// 规范化

var http = require("http");
var url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;
    console.log('Request for ' + pathname + ' received.')

    route(handle, pathname, response);
    // response.writeHead(200, {"Content-Type": "text/plain"});
    // let content = route(handle, pathname);
    // response.write(content);
    // // response.write("hello world");
    // response.end();
  }
  
  http.createServer(onRequest).listen(8888);
  console.log("Server have started")
}

exports.start = start;