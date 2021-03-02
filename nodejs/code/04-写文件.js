var fs = require('fs');

// 参数1 路径 参数2 内容 参数3 回调

fs.writeFile('./data/test.md', '我在学习nodejs2222' , function(err) {
  if (err) {
    console.log('写入失败~');
  } else {
    console.log('写入成功~~~')
  }
})

