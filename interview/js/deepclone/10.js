let obj1 = {
    name: 'zhangsan',
    age: 18,

}
// 引用类型，不是复印 没有实现拷贝 
// 指向同一个内存地址，所以obj2改变，obj1也会改变
let obj2 = obj1; 
obj2.age = 20; // 改变obj2的age属性，obj1的age属性也会改变

let arr1 = [1,2,3]; // 数组是引用类型，所以arr2和arr1指向同一个内存地址，所以arr2改变，arr1也会改变
let arr2 = arr1; 
arr2.push(4); // 改变arr2的长度，arr1的长度也会改变
// 怎么实现数组对象的拷贝？