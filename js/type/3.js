// 独一无二的值
const sym = Symbol();
const sym1 = Symbol();
const sym2 = Symbol('desc');// label 标签
console.log(typeof sym,sym);
console.log(sym === sym1);// false
// symbol 可以用于对象的key的创建
//使用symbol构造函数实例化，一个标记为id的唯一值ID
// ID 唯一性 Symbol
const ID = Symbol('id');
//es6 之前 key 是字符串
// es6 之后 key 是symbol
const sex= 'sex';
const age = Symbol('age');
const user = {
  "name": 'zhangsan',
  "age": 19,
  [sex]: '男', //sex是字符串 
  [age]: 18,
  //key 是独一无二的
  // 
  [ID]: 123,
}
// console.log(user.name,user[sex],user[ID],user[age],user.age);
//面向对象私有属性概念？
//对象的隐私， 内部需要，不希望外界调用
for(let key in user){// 遍历对象
  console.log(key,user[key],'---------');
}