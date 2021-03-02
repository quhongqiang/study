var http = require('http');

var server = http.createServer();

// request response  => req res 
server.on('request', function(req, res) {
  console.log("IP地址", req.socket.remoteAddress, "端口号" ,req.socket.remotePort)
  var url = req.url;
  if (url === '/') {
    var products = {
      code: 200,
      msg: '成功',
      data: [{
        name: '苹果',
        price: 13123
      }, {
        name: '梨',
        price: 2222
      }, {
        name: '香蕉',
        price: 33333
      }]
    };
    res.end(JSON.stringify(products))
  } else if ( url === '/login') {
    res.end('login')
  } else {
    res.end(' 404 not found')
  }

});
server.listen(3000, function() {
  console.log('服务器启动成功~访问http://127.0.0.1:3000');
})


