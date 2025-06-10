# tts 智能语音


## 智能前端  AI用户体验
- webllm
  AIGC api remote call
- tts 智能语音 
  网易云音乐 
- 用户体验
  音乐不要自动播放，用户点击播放按钮才播放 避免社死
  用户来决定

## 如果 不能做DOM 编程，react 里面怎么播放音乐？
- 原生的js DOM API 低效  document.querySelector()  不用 
- 不用audio 如何播放？

## 路径
- 相对路径
  ./ 同一级别目录
 ../ 上一级目录
 ./demo/  下一级目录
- 绝对路径
  物理路径 C:/
  网站根路径 /  index.html
- http://localhost:5173/sounds/snare.wav
  - npm run dev 
  - 本地服务器  http://localhost(127.0.0.1):5173
  端口背后对应的是不同服务
  - 找到index.html 作为首页
  - public 存放静态资源
    约定所有的资源可以直接访问

## react 事件机制
   - 不可以用addEventListener 来绑定事件
   - 必须用onClick 来绑定事件  react事件 ，和html 原生支持的事件有点像


## 小红书的event 事件机制  JavaScript 高级程序设计 1000+
- 多种事件机制
   - DOM0 级事件
     onclick  html 属性 缺点是耦合了。 不推荐
   - DOM2 级事件
     addEventListener html 和JS 事件上分离
   - react 
     采用了DOM 0 的方式，有利于组件html的表达 可读性高
     react 优于 vue
     API层面上看过去是这样的，但是实际上是采用了DOM2 级事件



## useRef 
- 可以帮助我们在react中获取DOM 对象
   - useRef(null) 空的对象
   - current 指向的是DOM 对象
   - jsx ref={ref} DOM 绑定
   - ref.current 可以访问DOM 对象

