# 性能优化

## 重绘重排

- 重绘
     当元素样式改变，但不影响布局时，浏览器将重新绘制元素的过程称为重绘。
     如改变颜色、背景、边框等。
- 重排
     DOM元素的尺寸、位置发生变化时，浏览器需要重新计算布局，影响其他元素位置的过程称为重排。
     重排一定会触发重绘（性能开销更大），但重绘不一定会触发重排。

### DEMO 1 批量修改DOM 
```js
// 这是不对的，因为多次操作可能触发多次重排重绘
// 虽然现代浏览器会批量更新/合并修改，优化
// 但是可以避免
const el = document.getElementById('myEl');
el.style.width = '100px';
el.style.height = '100px';
el.style.margin = '10px';
// good
el.style.cssText = 'width: 100px; height: 100px; margin: 10px;';// 用cssText
el.className = 'my-class';// 用类名而不是一堆的js代码
```

### 使用文档碎片
```js
const fragment = document.createDocumentFragment();// 创建一个文档碎片
for (let i = 0;i < 10; i++){
    const el = document.createElement('div');
    fragment.appendChild(el);// 没有重排重绘
}
document.body.appendChild(fragment);
// 用于批量添加元素时，使用document.createDocumentFragment()创建文档碎片，优化
```

## 脱离文档流进行操作 下线
```js
const el = document.getElementById('myEl');
el.style.position = 'absolute';// 脱离文档流
el.style.display = 'none';// 隐藏元素
// 当进行大量的DOM 操作时

el.style.display = 'block';// 显示元素
el.style.position = 'static';// 回到文档流
```

### 缓存布局信息
```js
// offsetTop 虽然是个读取，但是每次都会触发重排以获取最新的布局信息
for (let i = 0;i < 100; i++){
    el.style.top = el.offsetTop + 1 + 'px'; 
}

let top = el.offsetTop;// 缓存布局信息
for (let i = 0;i < 100; i++){
    top++;
    el.style.top = top + 'px';
}
```

### 使用transform 代替位置调整
```js
el.style.left = '100px';
// 只触发重绘，性能更好。
el.style.transform = 'translateX(100px)';
```

## 资源的加载优化
    - 图片懒加载
    - 路由懒加载
         代码文件上，会进行 code splitting 代码分割
    - 资源预加载
    未来可能会用到的资源，提前加载
    <link rel="preload" href="/next-page.js">
    dns-prefetch dns 预解析
    preload 当前页面必须资源，立即加载
    - script 资源的加载 阻塞的
        默认没有
        async 并发 
        defer
    - webp  格式图片
        图片的优化，可以显著的减少体积，并且质量不受影响
    - 图标字体库
        减少http请求数

## JS执行优化
    - 防抖节流
    - web workers 处理复杂计算
    - requestAnimationFrame 优化动画
    - requestIdleCallback 空闲时间执行任务 react fiber 机制 
       schedule 机制

## 框架层优化
    - memo, useMemo, useCallback 缓存组件，减少不必要的渲染
    - shadcn-ui 组件库 按需加载
    - 合理使用key 优化列表渲染

## 缓存策略
    - 强缓存和协商缓存
        Expires(受限于客户端时间不准确) / Cache-Control  不发送请求
        Last-Modified / If-Modified-Since 时间戳  304
        Etag / If-None-Match  哈希值  304
    - localStorage/sessionStorage/cookie
## 网络优化
    - CDN加速  内容分发网络
         存放静态资源的服务器，将资源缓存到离用户最近的服务器上
         实现分流
         多路复用  多域名服务器 
    - Gzip压缩
    - HTTP/2  多路复用  二进制分帧  头部压缩
    - DNS 预解析

## 首屏优化
    - SSR 服务端渲染
        组件渲染在服务器端就已经完成编译、执行，浏览器端直接显示
    - 骨架屏
    - http 2.0 server push 服务端首屏数据推送

## 性能测试
    - chrome 的performance 面板
    可以看到各项性能指标，针对性的优化，给出优化建议

    - 减少首屏JS/css 体积 （code spliting）
    代码分割（Code Splitting）是一种将代码库拆分成更小、更易管理的块的技术，
    以便按需加载或并行加载，从而优化应用的加载性能和执行效率。
    - 使用transform 代替位置调整,预加载相关资源
    掘金：js = (vue + vue-router) + App.vue + Home.vue + Components
    vue+ vue-router 单独拆分 为了利用缓存 基本上不会变动的
    App.vue + home.vue + Components 业务代码 经常修改，需要单独拆分
    

- lighthouse
    是chrome 的一款性能打分插件，会在性能、无障碍、最佳实践、SEO 打分
    并给出问题和优化建议，非常细致。
    - 图片大小优化 webp
    - 字体库
    - 渲染屏蔽请求

## 性能的关键指标
- FCP First Contentful Paint
    首内容绘制（First Contentful Paint, FCP）是衡量网页加载性能的指标，表示浏览器首次渲染出页面内容（如文本、图片等）的时间。
- LCP Largest Contentful Paint
    最大内容绘制（Largest Contentful Paint, LCP）是衡量网页加载性能的关键指标，表示页面中最大可见内容元素（如图片、视频或文本块）完全渲染完成的时间。