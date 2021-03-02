#### 1、声明变量
```js
// 以前
let name = '小红'; let age = 20;
// 现在
let name = '小红', age = 20; 
```
#### 2、es6 解构赋值
```js
// 以前
let name = '小红', age = 20, sex = '女'; 
// 现在
let [name, age, sex] = ['小红', 20, '女'];
```
#### 3、三元运算符
```js
// 以前
let num = 20, result = '';
if (num >= 20) {
  result = '小红'
} else {
  result = '小明'
}
// 现在
let result = num >= 20 ? '小红' : '小明';
 
```
#### 4、赋默认值
```js
// 以前
let imagePath;
let path = getImagePath();
if(path !== null && path !== undefined && path !== '') {
  imagePath = path;
} else {
  imagePath = 'default.jpg';
}
// 现在
let imagePath = getImagePath() || 'default.jpg';
``` 
#### 5、与 (&&) 短路运算
```js
// 以前
if (isLogin) {
  goToHome()
}
// 现在
isLogin && goToHome()
```
#### 6、交换两个变量(解构赋值)
```js
// 以前
let x = 'Hello', y = 55;
//Longhand
var temp = x;
x = y;
y = temp;
// 现在
[x, y] = [y, x]
```
#### 7、箭头函数
```js
// 以前
function add(num1, num2) {
  return num1 + num2;
}
// 现在
const add = (num1, num2) => num1 + num2;
```
#### 8、模板字符串
```js
// 以前
console.log('这个单子的金额是'+ money + '请在' + time + '支付')
// 现在
console.log(`这个单子的金额是${money}请在${time}支付`)
```
#### 9、多行字符串
```js
// 以前
console.log('JavaScript, often abbreviated as JS, is a\n' + 'programming language that conforms to the \n' +
'ECMAScript specification. JavaScript is high-level,\n' +
'often just-in-time compiled, and multi-paradigm.' );
// 现在
console.log(`JavaScript, often abbreviated as JS, is a
programming language that conforms to the
ECMAScript specification. JavaScript is high-level,
often just-in-time compiled, and multi-paradigm.`);
```
#### 10、多条件检查
```js
// 以前
if (value == 0 || value == 1 || value == 100 || value == 2000) {
  // xxx
}
// 现在
if ([0, 1, 100, 2000].indexOf(value) >= 0) {
  // xxx
}
if ([0, 1, 100, 2000].includes(value)) {
  // xxx
}
```
#### 11、对象属性复制
```js
let firstname = 'Amitav';
let lastname = 'Mishra';
// 以前
let obj = {firstname: firstname, lastname: lastname};
// 现在
let obj = {firstname, lastname};
```
#### 12、字符串转成数字
有一些内置的方法，例如`parseInt`和`parseFloat`可以用来将字符串转为数字。我们还可以简单地在字符串前提供一个一元运算符 `(+)` 来实现这一点。
```js
// 以前
let total = parseInt('453');
let average = parseFloat('42.6');
// 现在
let total = +'453';
let average = +'42.6';

let total = Number('453');
let average = Number('42.6');
```
#### 13、重复一个字符串多次
```js
为了重复一个字符串 `N` 次，你可以使用`for`循环。但是使用`repeat()`方法，我们可以一行代码就搞定。
// 以前
let str = '';
for(let i = 0; i < 5; i ++) {
  str += 'Hello ';
}
console.log(str);
// 现在
'Hello '.repeat(5);
```
#### 14、指数幂
```js
// 以前
const power = Math.pow(4, 3); // 64
// 现在
const power = 4**3; // 64
```
#### 15、双非位运算符 (~~)
```js
// 以前
const floor = Math.floor(6.8); // 6
// 现在
const floor = ~~6.8; // 6
```
#### 16、找出数组中的最大和最小数字
我们可以使用 `for` 循环来遍历数组中的每一个值，然后找出最大或最小值。我们还可以使用 `Array.reduce()` 方法来找出数组中的最大和最小数字。

但是使用扩展符号，我们一行就可以实现。
```js
// 现在
const arr = [2, 8, 15, 4];
Math.max(...arr); // 15
Math.min(...arr); // 2
```
#### 17、For 循环
为了遍历一个数组，我们一般使用传统的`for`循环。我们可以使用`for...of`来遍历数组。为了获取每个值的索引，我们可以使用`for...in`循环。
```js
let arr = [10, 20, 30, 40];
// 以前
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 现在
for (let val of arr) {
  console.log(val);
}

for (let index in arr) {
  console.log(arr[index]);
}

我们还可以使用`for...in`循环来遍历对象属性。
let obj = {x: 20, y: 50};
for (let key in obj) {
  console.log(obj[key]);
}
```
#### 18、合并数组
```js
let arr1 = [20, 30];
// 以前
let arr2 = arr1.concat([60, 80]);

// 现在
let arr2 = [...arr1, 60, 80];
```
#### 19、深拷贝多级对象
为了深拷贝一个多级对象，我们要遍历每一个属性并检查当前属性是否包含一个对象。如果当前属性包含一个对象，然后要将当前属性值作为参数递归调用相同的方法（例如，嵌套的对象）。

我们可以使用`JSON.stringify()`和`JSON.parse()`，如果我们的对象不包含`函数`、`undefined`、`NaN` 或`日期值`的话。

如果有一个单级对象，例如没有嵌套的对象，那么我们也可以使用扩展符来实现深拷贝。
```js
let obj = {x: 20, y: {z: 30}};
// 以前
const makeDeepClone = (obj) => {
  let newObject = {};
  Object.keys(obj).map(key => {
    if(typeof obj[key] === 'object'){
      newObject[key] = makeDeepClone(obj[key]);
    } else {
      newObject[key] = obj[key];
    }
  });
 return newObject;
}
const cloneObj = makeDeepClone(obj);
// 现在
const cloneObj = JSON.parse(JSON.stringify(obj));
// 或者
let obj = {x: 20, y: 'hello'};
const cloneObj = {...obj};
```
#### 20、获取字符串中的字符
```js
let str = 'jscurious.com';
// 以前
str.charAt(2); // c
// 现在
str[2]; // c
```
