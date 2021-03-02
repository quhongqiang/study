// require
// 端口号

var http = require('http')

var server = http.createServer()

server.on('request', function(req, res) {
  /*
  * 浏览器在不知道服务器响应内容的编码情况下会按照当前操作系统的默认编码去解析
  * 在 http协议中 Content-Type 就是数据内容是什么类型
  */
  res.setHeader('Content-Type', 'text/plain; charset=utf-8')
  res.end("hello 世界")

  // res.setHeader('Content-Type', 'text/html; charset=utf-8')
  // res.end('<p>你好，世界 <a href="">点我</a></p>')
})
server.listen(3000, function() {
  console.log('Server is runing...')
})


