# promise


- CPU轮询 
- 同步任务，异步任务 
  执行异步任务时，会将其放入任务队列中，等待主线程执行完毕后，再执行任务队列中的任务
  代码的编写顺序和执行顺序不一样
  异步任务比较花时间
- 如何实现
  111  输出在setTimeout之后
  控制执行的顺序


## Promise 的底层理解
- 异步任务需要执行时间，不管的话，会跳到后面执行
  代码的可读性不好，代码的阅读顺序和执行顺序不一样
- const p = new Promise() 构造函数
  类， 专门用于解决异步问题
  prototype then 方法
- 异步任务放到这个fn
- fn 里面的代码执行完毕后，resolve 方法会被调用
- p.then(() => {}) 方法会被调用，里面的代码会被执行
- 我们把任务放到then 里面就可以把执行的流程交给resolve来处理



## 控制执行流程的es6 套路
  - new Promise() // 请Promise 类 控制异步流程专业
  - (resolve) => { // executor 耗时性的异步任务
    异步任务 setTinmout readFile fetch ....
  } // 回调函数
  - .then() 原型方法
  - resvole() then 函数执行 

- promise .then 升级到 async await 异步编程 成对出现的
  async 用于修饰函数，函数里面有异步任务
  await 等待异步任务完成， 异步变同步 
  
