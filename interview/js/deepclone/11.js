// const arr = [1, 2, 3];
// const newArr = [...arr];
// // 拷贝数组  展开运算符  ...arr  
// // 浅拷贝  只拷贝第一层  
// // 第二层是引用类型  指向同一个内存地址 
// // 所以newArr改变，arr也会改变  
// // 深拷贝  第二层也会拷贝  指向不同的内存地址
// // 所以newArr改变，arr不会改变

// let arr2 = arr.slice();
// arr2[1]= 'b';
// console.log(arr2,arr);

const arr3 = [[1, 2], [3, 4], [5, [6, 7]]];
let arr4 = arr3.slice();
arr4[2][1][1] = 8;
console.log(arr4, arr3);
let arr5 = arr3.concat(); 
