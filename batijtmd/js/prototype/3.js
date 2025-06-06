// 没有class 的js 如何实现OOP 面向对象编程
// 首字母大写 约定 
// 1.类的概念
// 2.构造函数
function Person(name,age){
  // this 指向实例化的对象  实例化的对象的属性和方法 都是this的属性和方法
  this.name = name;
  this.age = age;
}
// 函数对象 原型对象
// 类的方法
Person.prototype ={
  sayHello: function(){
    console.log(`Hello, my name is ${this.name}`);
  }
}
// new 一下 实例化对象 
// new 运行构造函数
// console.log(new Person('Srierin',18))
// console.log(new Person('cpa',18))
let sr = new Person('Srierin',18)
sr.sayHello()
// 原型对象
console.log(sr.__proto__.__proto__)
let o ={a:1};
console.log(o.__proto__);
console.log(o.toString());
