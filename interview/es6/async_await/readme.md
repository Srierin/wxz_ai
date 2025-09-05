# async await 是什么，如何实现的？

它是ES2017 引入的异步编程语法糖，让异步代码写起来更像同步代码
解决了then的链式调用很麻烦的问题

- async/await 组合使用
- async 声明的函数一定返回一个Promise对象
- await 会暂停async 函数的执行，等待右侧的Promise解决后继续
- 本质还是异步的，后面的代码会封装到Promise 的then中

- 本质上，async/await 是Promise + generator 的封装
    generator 思想很好，* 区别于普通函数，用yield 来暂停执行
    运行得到一个生成器迭代对象 next().value 来获取值
    async 函数内部会被编译成一个状态机（等待？完成？）
- async/await 简单优雅，但不能滥用，如果有并发需求，需要使用Promise.all
   