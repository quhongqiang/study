var http = require('http');
var server = http.createServer();

// request 接受2个参数  一个就是request 一个是 response
server.on('request', function(request, response) {
  console.log(`收到客户端的请求了~${request.url}`);
  response.write('hello World');
  response.end();
})

server.listen(3000, function() {
  console.log('http://127.0.0.1:3000/ 访问');
})

