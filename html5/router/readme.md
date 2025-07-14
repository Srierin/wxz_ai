# 路由

history
hash

- 传统页面开发
    重要的用户体验缺失 
    - 需要到后端拿到新的html，重新渲染
         没有了白屏
    -  通过a 标签 切换页面 会有白屏问题
    - 相比于react-router-dom 局部热更新
    前端路由 去负责 

- 新的react-router-dom  SPA 单页面应用
    它能够做到只有一个页面 但能够带来多页面效果


## SPA
- Single Page Application 单页面应用
- 只有一个页面 
    - react 组件
        页面级别组件
    - Routes/Route 下申明，文档流中占位
    - Routes外面，Outlet外面 不用再次更新
    - url驱动 Route内部显示哪个页面组件
         热更新
    - 用一个页面完成多个页面的显示
    - SPA 用户体验很有优势

## 核心
- url 切换
    不能用a标签
    用Link 
    现代url发送改变 可以不去重新发送请求
    把它作为一个事件，js 动态加载

- 这是一个事件 hashChange/pushState
- 根据当前的url，取出对应的组件
    替换掉之前的页面级别组件
- 实现的用户体验是
    URL 改变了，竟然不用刷新整个页面
    不用再看白屏 页面加载很快
- 而且不用再去后端拿新的html
    因为Home About 都是前端组件

## url 改变，但不重新渲染的解决方案
- hash 的改变 很早就有了这个特性
    原来是用来页面锚点，长页面的电梯
    不会刷新页面
- 会触发一个事件
    hashChange
  