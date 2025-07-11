# event loop 
事件循环机制  JS 的执行机制

- js 是单线程的
  同一时刻只能做一件事
  同步任务尽快执行 因为要去渲染页面（重绘重排），响应用户的交互（优先）
  但是可以通过事件循环机制来实现多线程的效果

  耗时性任务
  - setTimeout/setInterval 定时器
  - fetch/ajax 异步请求
  - eventListener 事件监听
- script 脚本中
  这是一个宏任务

- 微任务  紧急的，优先的，同步任务执行完后的一个补充
  - promise.then()
  - MutationObserver 监听dom变化 在页面渲染之前执行 可以拿到DOM 的变化
  - queueMicrotask() 可以在页面渲染之前执行 可以拿到DOM 的变化 但是优先级高于promise.then()
  - process.nextTick() nodejs 环境下的一个api 可以在页面渲染之前执行 可以拿到DOM 的变化 但是优先级高于promise.then()


  