/**
 * @func 反转字符串
 * @param {string} str
 * @return string 
 */
// function reverseString(str){
//   // str 是字符串 简单数据类型 primitive

//   return str.split('').reverse().join('');
// }
//函数表达式
//es5 函数表达式
// const reverseString = function(str) {
//   return str.split('').reverse().join('');
// }
//es6 箭头函数 简洁 不需要function了 用箭头代替
//{}也省了 只有一句话的时候
//他是返回值的时候 连return也省了
const reverseString = str =>str.split('').reverse().join('')
console.log(reverseString('hello'));