// var name = 'Global Name';
// function logName() {
//   console.log(this.name);
// }
// logName();

// var name = 'Global';
// const obj = {
//   name: 'Alice',
//   logName: function() {
//     console.log(this.name);
//   }
// };
// const aliasLog = obj.logName; 
// console.log(aliasLog()+10);

// function Person(name) {
//   this.name = name;
// }
// // 在原型上添加方法
// Person.prototype.sayHello = function() {
//   console.log("Hello, I'm " + this.name);
// };

// // 创建实例
// const person1 = new Person("Alice");

// // 查找过程：
// person1.sayHello(); // 1. person1自身没有sayHello -> 2. 去person1.__proto__ (即Person.prototype) 找到并执行
// console.log(person1.toString());
// person1.toString(); // 1. person1自身没有 -> 2. Person.prototype没有 -> 3. 去Object.prototype找到并执行

function flattenArray(arr){
  let result = [];
  for(let i=0;i<arr.length;i++){
    if(Array.isArray(arr[i])){
      result = result.concat(flattenArray(arr[i]));
    }else{
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(flattenArray([1, [2, [3, 4], 5], 6]));


// setTimeout(() => {
//   console.log('start');
//   Promise.resolve().then(() => {
//     console.log('Promise 1');
//     setTimeout(() => {
//       console.log('setTimeout 2');
//     }，0)
//   });
//   setTimeout(() => {
//     console.log('setTimeout 1');
//     Promise.resolve().then(() => {
//       console.log('Promise 2');
//     });
//   }，0);
// }, 0)
// console.log('end');


// // end,start,Promise 1,setTimeout 2,setTimeout 1,promise 2




// var s = 0;
// var i = 1;
// var funcs = [];
// var n = 3;
// function x(n) {
//   for (i = 0; i < 3; i++) {
//     funcs[i] = () => {
//       s = s + i * n;
//       console.log(s);
//     };
//   }
// }
// x(1);
// funcs[0]();
// funcs[1]();
// funcs[2]();


// 0,3,6




// function flattenArray(arr){
//   let result = [];
//   for(let i=0;i<arr.length;i++){
//       if(Array.isArray(arr[i])){
//           result[i] = result[i].push(flattenArray(arr[i]));
//       }else{
//           result[i] = result[i].push(arr[i]);
//       }
//   }
//   return result
// }

// console.log(flattenArray([1, [2, [3, 4], 5], 6]));