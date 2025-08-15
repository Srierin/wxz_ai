const s = Symbol('id');// 独一无二的
const source = {
  [s]: 123, // 用Symbol作为key
  a: 1
}

const target = [];
Object.assign(target, source); // 拷贝到数组

console.log(target); // [1]  数组的Symbol属性会被忽略， 所以s属性不会被拷贝到数组中
console.log(target[s]); 

const obj = { reg: /abc/, map: new Map() };
const copy = JSON.parse(JSON.stringify(obj));
console.log(copy.reg); // {} —— 正则表达式变空对象
console.log(copy.map); // {} —— Map 变空对象
