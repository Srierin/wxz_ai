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


## 多进程和多线程
- CPU 轮询 

- 进程
  分配资源（内存（地址，物理层面） CPU计算的机会）的最小单元
  会拿到独立的进程ID 一定的大小和开销  进程之间不能共享资源 但是可以通过IPC（进程间通信）来共享资源
  程序运行以进程为单位
  - 主进程 
    管理子进程 父子关系 可以并发 并行
    
  - 主线程
    负责执行JS代码
    负责渲染页面
    负责响应用户的交互
    负责执行异步任务
- 线程
  干活的 
- 进程间的通信
  两个独立的进程间的通信开销很大
  父子进程之间会好点

- chrome浏览器是多进程架构的 
  - 浏览器主进程
    多线程
  - 一个tab页 对应一个渲染进程
    多线程
    几个tab 几个进程
    安全、一个页面crash（崩溃） 不会影响其他页面
  - 进程要工作就会启动一个主线程 主角
    在这之中会完成 JS 单线程 ，为什么一定是单线程？
    - 简单
    - DOM编程模型 不可以出现线程的争抢 保证安全

  - setTimeout 专属的定时器线程
    到时间了，callback 会被放到宏任务队列中
    放到event loop中  队列中
    为什么setTimeout 不准确 
    event loop 机制
    宏任务，微任务 是用到了队列
  - addEventListener 没有独立的线程 是在主线程中执行的
    在DOM里面 不需要单独的线程 宏任务队列中
  - fetch/xhr 专属的下载线程 

- 渲染进程的主线程
  - 解析HTML 生成DOM树
  - 解析CSS 生成CSSOM树
  - 把DOM树和CSSOM树合并成一个渲染树
  - layout 树的布局
  - 合并成一个图层树
  - V8引擎 执行JS代码
  - 独立的绘制线程

- 事件队列
  - 定时器到点了
  - onreadystatechange 下载完成了
  - 宏任务队列
  - 微任务队列
  
- 页面渲染 

JS 和 渲染是互斥的  

  
  