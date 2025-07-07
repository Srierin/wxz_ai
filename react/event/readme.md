# react 事件机制
- js 事件机制
    - 异步
    - 如何去监听一个事件
       - addEventListener() DOM2 级事件
       - DOM0 级事件
       <a onClick="domSomething()"></a>
       - 有DOM 1?  这些是DOM 的版本 没有去做事件的升级

    - addEventListener(type,listener,useCapture?)
       - 回调函数 callback 异步处理的称呼 
       - promise then 
       - async await 
       监听器 
- 注册事件  addEventListener
- useCapture false 默认值
   页面是浏览器渲染引擎 按像素点画出来 png 
   先捕获 document -> 一层层去问
      点了谁?
      先触发父元素 
   event.target 
       捕获阶段结束，拿到event.target 
   冒泡
       从event.target 开始 冒泡到html  再冒泡回去到根
       事件让他在冒泡阶段执行
       可以控制他在哪个阶段执行

  
