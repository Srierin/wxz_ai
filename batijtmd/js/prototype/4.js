function Person(name,age){
  // this 指向实例化的对象  实例化的对象的属性和方法 都是this的属性和方法
  this.name = name;
  this.age = age;
}

Person.prototype.sayHello = function(){
    console.log(`Hello, my name is ${this.name}`);
}

var p = new Person('Srierin',18);
console.log(p.__proto__);
var a ={
  name: '李白',
  country: '中国'
}
p.__proto__ = a;
console.log(p.__proto__);
console.log(p.country);
console.log(Person.prototype);
console.log(Person.prototype.constructor == Person);
console.log(p.aaa,p.name);