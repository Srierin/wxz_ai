# React Fiber 机制

- 组件比较多，组件树（树状组件）的深度比较深
    每个组件都需要经历 JSX模板的编译、VDOM 的创建、响应式的申明、生命周期、挂载等
    
    如何解决？核心问题是什么？
    react 组件渲染是同步代码 ，更加重要的没机会做
    所以需要中断，让浏览器响应用户更优先的先做一下，到时候再回来接着执行

- fiber 机制是react 16 引入的重写核心算法，实现了可中断渲染

   - 学习过什么api 类似fiber
        可打断可连续 
        requestAnimationFrame 
        requestIdleCallback

- requestAnimationFrame
    是浏览器提供的用于在下一次重绘之前执行动画代码的API，它能确保动画流畅运行并节省资源。
    1s 执行60次


- requestIdleCallback
    - React 组件渲染低优先级任务
        不能一直不停执行，需要被中断
    - 更高优先级的任务是用户交互

    - react 组件树 渲染任务拆分
        在一个时间片里可以执行完
        这个时间长度用requestIdleCallback 来描述都
        一直去询问还有多少可执行时间


## 总结一下
- react 组件多，组件树深度，渲染耗时长，复杂
- 使用requestIdleCallback 来实现可中断渲染
- 优先响应界面交互和核心任务
- 当再次idle 后，继续执行渲染任务 
- requestIdleCallback 时间不定，16.67ms (刷帧率) - 优先任务的耗时 = 本次执行时间
- 没有filber react 组件一多，就会卡，fiber 解决性能问题，主要通过中断渲染来解决
保障用户交互流程，解决大型应用阻塞主线程的问题。
- fiber 节点，react 渲染的工作单元 



