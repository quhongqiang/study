var http = require('http');
// 使用 http.createServer() 方法创建一个web服务器

var server = http.createServer();

// 发送请求  接受请求 处理请求 发送响应（反馈）

server.on('request', function() {
  console.log('收到客户端的请求了~')
})

// 绑定端口号，启动服务器
server.listen(3000, function() {
  console.log('http://127.0.0.1:3000/ 访问');
})

