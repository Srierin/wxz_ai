// 如何遍历数组
// 1. for (let i = 0; i < arr.length; i++) {} 计数循环
// 2. while (i < arr.length) {} 条件循环
// 3. forEach 方法  遍历数组，对数组中的每个元素执行一次提供的函数。
// 4. map filter find some every ... 方法  遍历数组，对数组中的每个元素执行一次提供的函数。
// 5. for of
const names = ['zs', 'ls', 'ww', 'zl', 'ww'];
names.forEach(name => {
    if(name === 'ww'){
        console.log('找到ww了');
        // break; // 报错，因为forEach 是一个函数，函数是没有块级作用域的，所以不能使用 break 跳出循环
        return; // return 只能跳出当前函数，不能跳出循环
    }
    console.log('遍历到了' + name + '了')
})