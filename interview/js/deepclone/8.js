const s = Symbol('id');// 独一无二的
const source = {
  [s]: 123, // 用Symbol作为key
  a: 1
}

const target = [];
Object.assign(target, source); // 拷贝到数组

console.log(target); // [1]  数组的Symbol属性会被忽略， 所以s属性不会被拷贝到数组中