/*
* 01、数组扁平化
* 数组扁平化是指将一个多维数组变为一个一维数组
*/
const arr = [1, [2, [3, [4, 5]]], 6];
// 方法一：使用flat()
const res1 = arr.flat(Infinity);
// 方法二：利用正则
const res2 = JSON.parse('[' + JSON.stringify(arr).replace(/\[|\]/g, '') + ']');
// 方法三：使用reduce
const flatten = data => {
  return data.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
  }, [])
}
const res3 = flatten(arr);
// 方法四：函数递归
const res4 = [];
const fn = data => {
  for (let i = 0; i < data.length; i++) {
    if (Array.isArray(data[i])) {
      fn(data[i]);
    } else {
      res4.push(data[i]);
    }
  }
}
fn(arr);
console.log(res1, res2, res3, res4)


























