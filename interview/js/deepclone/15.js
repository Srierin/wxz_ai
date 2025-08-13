let obj = {a:1,b:2,c:3}
// 太常用了，大型语音都内置的，{} []
// HsahMap 字典 O(1) 时间复杂度 key:value
const target = new Map();// 实例化es6 新的数据结构
target.set('c',3) // 键值对
console.log(target.get('c')) // 3 取值
target.set(obj,4);// 和JSON 不一样的地方 对象可以做key
console.log(target.get(obj)) // 4 取值
obj=null;
console.log(target.get(obj)) // undefined 取不到值


let obj2 = {name:'zhangsan'}
const target2 = new WeakMap();// Weak 弱的
target2.set(obj2,'code 秘密');
obj2 = null; // 垃圾回收机制 会自动回收 obj2 指向的内存地址
console.log(target2.get(obj2)) // undefined 取不到值 