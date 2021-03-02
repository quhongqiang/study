// 在浏览器中的JavaScript 是没有文件操作的能力的
// 但是 node 中的JavaScript是具有文件操作的能力

// fs 是 file-system 的简写 就是文件系统的意思
// 在 node 中 如果想要进行文件炒作，就必须引入 fs 这个核心模块
// 在 fs 这个核心模块中，就提供了所有的文件操作相关的 api

// 使用 require 的 方法加载 fs 核心模块

var fs = require('fs');

/* 2.读取文件
  第一个参数是要读取的路径
  第二个参数是一个回调函数
  成功
    data 数据
    error null
  失败
    data null || 可能是undefined
    error 错误对象
*/
fs.readFile('./data/test.txt', function (error, data) {
  //
  // 会被转成16进制 流
  // 所以通过toString() 方法将其转化为我们认识的字符

  if (error) return console.log('读取文件失败~');

  console.log(data.toString());
})